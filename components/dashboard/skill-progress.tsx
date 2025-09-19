"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProgressBar } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import { getEnrolledSkills, unenrollSkill } from "@/lib/userSkills"
import { resourcesData } from "@/lib/resourcesData"
import { setDoc, doc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"
import { db, auth } from "@/lib/firebase"
import { useRouter } from "next/navigation";

export function SkillProgress() {
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [removing, setRemoving] = useState<string | null>(null);
  const [resourceProgress, setResourceProgress] = useState<Record<string, { completed: number, total: number }>>({});
  const router = useRouter();

  const fetchSkills = async () => {
    setLoading(true);
    const data = await getEnrolledSkills() as any[];
    setSkills(data);

    // Get current user UID
    const user = auth.currentUser;
    if (!user) {
      setResourceProgress({});
      setLoading(false);
      return;
    }

    // Helper to count all resources, including nested ones
    function countAllResources(resources: any[]): number {
      return resources.reduce((acc, res) => {
        if (Array.isArray(res.resources)) {
          return acc + countAllResources(res.resources);
        }
        return acc + 1;
      }, 0);
    }

    // For each skill, fetch completed resources
    const progress: Record<string, { completed: number, total: number }> = {};
    for (const skill of data) {
      const skillId = skill.id;
      let total = 1;
      if (resourcesData[skillId] && Array.isArray(resourcesData[skillId].resources)) {
        total = countAllResources(resourcesData[skillId].resources);
      } else if (resourcesData['default'] && Array.isArray(resourcesData['default'].resources)) {
        total = countAllResources(resourcesData['default'].resources);
      }
      let completed = 0;
      try {
        const snap = await getDocs(collection(db, 'users', user.uid, 'enrolledSkills', skillId, 'resources'));
        completed = snap.docs.length;
      } catch {}
      progress[skillId] = { completed, total };
    }
    setResourceProgress(progress);
    setLoading(false);
  };

  useEffect(() => {
    fetchSkills();
    // eslint-disable-next-line
  }, []);

  const handleRemove = async (skillId: string) => {
    if (!window.confirm("Are you sure you want to remove this skill?")) return;
    setRemoving(skillId);
    try {
      await unenrollSkill(skillId);
      fetchSkills();
    } finally {
      setRemoving(null);
    }
  };

  // Calculate overall progress
  let totalCompleted = 0;
  let totalResources = 0;
  Object.values(resourceProgress).forEach(({ completed, total }) => {
    totalCompleted += completed;
    totalResources += total;
  });
  const percent = totalResources > 0 ? Math.round((totalCompleted / totalResources) * 100) : 0;

  return (
    <div className="space-y-6">
  {/* debugInfo removed */}
      {skills.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-xs text-muted-foreground">{percent}% completed</span>
          </div>
          <ProgressBar value={percent} className="h-2" />
        </div>
      )}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Enrolled Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {loading ? (
            <div>Loading...</div>
          ) : skills.length === 0 ? (
            <div className="text-muted-foreground">You have not enrolled in any skills yet. Start learning a skill to see your progress here!</div>
          ) : (
            skills.map((skill, index) => {
              // Only show the actual resources for this skill from resourcesData
              const resourceList = Array.isArray(resourcesData[skill.id]?.resources)
                ? resourcesData[skill.id].resources
                : [];
              const progress = {
                completed: resourceProgress[skill.id]?.completed || 0,
                total: resourceList.length || 1,
              };
              const btnCompleted = progress.completed === progress.total;
              const handleDashboardStartLearning = async () => {
                if (!btnCompleted) {
                  // Mark as completed in Firestore
                  const user = auth.currentUser;
                  if (user) {
                    await setDoc(
                      doc(db, "users", user.uid, "enrolledSkills", skill.id, "resources", "0"),
                      { completedAt: new Date().toISOString() },
                      { merge: true }
                    );
                  }
                  fetchSkills();
                }
                // Route to the internal resources page for this skill
                router.push(`/resources/${skill.id}`);
              };
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold capitalize">{skill.id.replace(/-/g, ' ')}</h3>
                    <Badge className="text-xs bg-primary/10 text-primary">
                      {btnCompleted ? 'Completed' : 'Enrolled'}
                    </Badge>
                    <button
                      className="ml-2 px-2 py-1 rounded bg-destructive text-white text-xs font-medium hover:bg-destructive/80 transition-colors"
                      onClick={() => handleRemove(skill.id)}
                      disabled={removing === skill.id}
                    >
                      {removing === skill.id ? 'Removing...' : 'Remove'}
                    </button>
                  </div>
                  <div className="text-xs text-muted-foreground">Started: {skill.startedAt ? new Date(skill.startedAt).toLocaleDateString() : 'N/A'}</div>
                  <div className="flex items-center gap-2 pt-2">
                    <ProgressBar value={progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0} className="h-2 w-32" />
                    <span className="text-xs text-muted-foreground">{progress.completed}/{progress.total} resources completed</span>
                  </div>
                  <div className="pt-2">
                    <button
                      className={`px-3 py-1 rounded bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-colors`}
                      onClick={handleDashboardStartLearning}
                    >
                      {btnCompleted ? 'Completed' : 'Start Learning'}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </CardContent>
      </Card>
    </div>
  );
}

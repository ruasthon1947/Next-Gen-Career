"use client"

import { useEffect, useState } from "react";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { resourcesData } from "@/lib/resourcesData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
export default function ResourcesPage() {
  const params = useParams();
  const technology = params.technology as string;
  const [completedResources, setCompletedResources] = useState<number[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && technology) {
        try {
          const snap = await getDocs(collection(db, "users", user.uid, "enrolledSkills", technology, "resources"));
          const completed = snap.docs.map(doc => parseInt(doc.id, 10)).filter(idx => !isNaN(idx));
          setCompletedResources(completed);
        } catch (e) {
          setCompletedResources([]);
        }
      }
    });
    return () => unsubscribe();
  }, [technology]);

  const handleResourceComplete = async (resourceIdx: number) => {
    const user = auth.currentUser;
    if (!user) return;
    try {
      await setDoc(
        doc(db, "users", user.uid, "enrolledSkills", technology, "resources", String(resourceIdx)),
        { completedAt: new Date().toISOString() },
        { merge: true }
      );
      setCompletedResources((prev) => [...prev, resourceIdx]);
    } catch (e) {}
  };

  const data = resourcesData[technology as keyof typeof resourcesData];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-2 sm:py-4">
        <div className="max-w-4xl mx-auto">
          {data ? (
            <>
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-center sm:text-2xl">{data.title}</h1>
                  <Badge variant="secondary">{data.category}</Badge>
                  <Badge variant="outline">{data.difficulty}</Badge>
                </div>
                <p className="text-lg text-muted-foreground text-center sm:text-base">{data.description}</p>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-center sm:text-xl">Free Learning Resources</h2>
                <div className="grid gap-6 sm:gap-4">
                  {data.resources.map((resource, index) => {
                    const IconComponent = resource.icon;
                    const isCompleted = completedResources.includes(index);
                    return (
                      <Card key={index} className="hover:shadow-md transition-all duration-300">
                        <CardHeader>
                          <div className="flex flex-wrap items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <IconComponent className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-lg sm:text-base">{resource.title}</CardTitle>
                                <div className="flex flex-wrap items-center gap-2 mt-1">
                                  <Badge variant="outline" className="text-xs">
                                    {resource.type}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground sm:text-xs">{resource.duration}</span>
                                  <span className="text-sm text-muted-foreground sm:text-xs">⭐ {resource.rating}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 items-end">
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isCompleted ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary/90'}`}
                                onClick={async (e) => {
                                  if (!isCompleted) {
                                    e.preventDefault();
                                    await handleResourceComplete(index);
                                    window.open(resource.url, '_blank');
                                  }
                                }}
                              >
                                {isCompleted ? 'Completed' : 'Visit Resource'}
                              </a>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-muted-foreground mb-2">{resource.description}</div>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm flex items-center gap-1">
                            <ExternalLink className="h-4 w-4" /> Visit Resource
                          </a>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-lg text-muted-foreground py-16">
              No resources found for this skill. Please check back later or choose another skill.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SkillProgress } from "./skill-progress";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { getEnrolledSkills } from "@/lib/userSkills";

export function UserDashboard() {
  const router = useRouter();
  const [enrolledSkills, setEnrolledSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEnrolledSkills().then((skills: any) => {
      setEnrolledSkills(skills as any[]);
      setLoading(false);
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <span className="text-muted-foreground">Loading dashboard...</span>
      </div>
    );
  }

  if (!enrolledSkills || enrolledSkills.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <h2 className="text-2xl font-bold mb-2">No Skills Enrolled Yet</h2>
        <p className="text-muted-foreground mb-4">Start learning a skill from the Skills tab to see your progress here.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-7xl">
  <SkillProgress />
      {/* Removed logout button from dashboard, now handled in header user info popup */}
    </div>
  );
}

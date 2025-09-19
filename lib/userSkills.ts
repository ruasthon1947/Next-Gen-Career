import { db, auth } from './firebase';
import { doc, setDoc, getDocs, collection, deleteDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export async function markSkillStarted(skillId: string) {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await setDoc(
            doc(db, 'users', user.uid, 'enrolledSkills', skillId),
            { startedAt: new Date().toISOString(), completed: false },
            { merge: true }
          );
          resolve(true);
        } catch (e) {
          reject(e);
        }
      } else {
        reject('No user');
      }
    });
  });
}

export async function getEnrolledSkills() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const snap = await getDocs(collection(db, 'users', user.uid, 'enrolledSkills'));
          const skills = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          resolve(skills);
        } catch (e) {
          reject(e);
        }
      } else {
        resolve([]);
      }
    });
  });
}

export async function unenrollSkill(skillId: string) {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await deleteDoc(doc(db, 'users', user.uid, 'enrolledSkills', skillId));
          resolve(true);
        } catch (e) {
          reject(e);
        }
      } else {
        reject('No user');
      }
    });
  });
}

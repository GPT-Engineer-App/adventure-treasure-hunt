import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const badges = [
  { id: 1, name: "Explorer", description: "Visited 5 locations" },
  { id: 2, name: "Treasure Hunter", description: "Found 3 treasures" },
  { id: 3, name: "Master Adventurer", description: "Completed all challenges" },
];

const leaderboard = [
  { id: 1, name: "Alice", score: 1500 },
  { id: 2, name: "Bob", score: 1200 },
  { id: 3, name: "Charlie", score: 1000 },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-5xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-white">User Profile</h1>
      </header>

      <main className="w-full max-w-5xl mx-auto space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Profile Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <Avatar.Image src="https://via.placeholder.com/150" alt="User Avatar" />
                  <Avatar.Fallback>U</Avatar.Fallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">Username</h2>
                  <p className="text-lg">Level 5 Adventurer</p>
                </div>
              </div>
              <Progress value={70} className="mt-4" />
              <p className="text-lg mt-2">70% to next level</p>
            </CardContent>
          </Card>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Collected Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-4">
              {badges.map((badge) => (
                <Badge key={badge.id} variant="outline">
                  <div className="text-center">
                    <p className="font-bold">{badge.name}</p>
                    <p className="text-sm">{badge.description}</p>
                  </div>
                </Badge>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboard.map((entry, index) => (
                    <TableRow key={entry.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{entry.name}</TableCell>
                      <TableCell>{entry.score}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Profile;
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const locations = [
  { id: 1, name: "Location 1", position: [51.505, -0.09], description: "Description for Location 1" },
  { id: 2, name: "Location 2", position: [51.515, -0.1], description: "Description for Location 2" },
  { id: 3, name: "Location 3", position: [51.525, -0.12], description: "Description for Location 3" },
];

const TreasureHunt = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-5xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-white">Treasure Hunt</h1>
      </header>

      <main className="w-full max-w-5xl mx-auto space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">How to Participate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Follow the map to explore different locations. Click on the markers to find hidden treasures and complete challenges!</p>
              <Button variant="outline" className="mt-4">Start Your Adventure</Button>
            </CardContent>
          </Card>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <MapContainer center={[51.505, -0.09]} zoom={13} className="h-96 w-full rounded-lg">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
              <Marker key={location.id} position={location.position}>
                <Popup>
                  <strong>{location.name}</strong>
                  <p>{location.description}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </main>
    </div>
  );
};

export default TreasureHunt;
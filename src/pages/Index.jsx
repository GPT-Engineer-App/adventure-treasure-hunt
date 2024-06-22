import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-5xl mx-auto mb-8">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl font-bold">Adventure Awaits</NavigationMenuTrigger>
            </NavigationMenuItem>
            <div className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="#treasure-hunt">Treasure Hunt</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#ar-capabilities">AR Capabilities</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#tourism-info">Tourism Info</NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="w-full max-w-5xl mx-auto space-y-8">
        <section id="treasure-hunt" className="bg-white p-6 rounded-lg shadow-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Treasure Hunt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Embark on an exciting treasure hunt adventure. Explore different locations and find hidden treasures!</p>
              <Button variant="outline" className="mt-4">Start Now</Button>
            </CardContent>
          </Card>
        </section>

        <section id="ar-capabilities" className="bg-white p-6 rounded-lg shadow-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">AR Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Experience augmented reality like never before. Interact with virtual objects in the real world!</p>
              <Button variant="outline" className="mt-4">Learn More</Button>
            </CardContent>
          </Card>
        </section>

        <section id="tourism-info" className="bg-white p-6 rounded-lg shadow-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Tourism Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Discover the best tourist spots and attractions. Plan your visit with our comprehensive guides!</p>
              <Button variant="outline" className="mt-4">Explore</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
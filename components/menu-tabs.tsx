'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DailyMenu } from '@/components/menu/daily-menu'
import { CateringMenu } from '@/components/menu/catering-menu'
import { CateringPrices } from '@/components/menu/catering-prices'
import { CupcakeFlavors } from '@/components/menu/cupcake-flavors'
import { WeddingMenu } from '@/components/menu/wedding-menu'

export function MenuTabs() {
  return (
    <Tabs defaultValue="daily" className="w-full">
      <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8">
        <TabsTrigger
          value="daily"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border"
        >
          Daily Menu
        </TabsTrigger>
        <TabsTrigger
          value="catering"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border"
        >
          Catering Menu
        </TabsTrigger>
        <TabsTrigger
          value="catering-prices"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border"
        >
          Catering Prices
        </TabsTrigger>
        <TabsTrigger
          value="cupcakes"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border"
        >
          Cupcake Flavors
        </TabsTrigger>
        <TabsTrigger
          value="wedding"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border"
        >
          Wedding Services
        </TabsTrigger>
      </TabsList>

      <TabsContent value="daily">
        <DailyMenu />
      </TabsContent>

      <TabsContent value="catering">
        <CateringMenu />
      </TabsContent>

      <TabsContent value="catering-prices">
        <CateringPrices />
      </TabsContent>

      <TabsContent value="cupcakes">
        <CupcakeFlavors />
      </TabsContent>

      <TabsContent value="wedding">
        <WeddingMenu />
      </TabsContent>
    </Tabs>
  )
}

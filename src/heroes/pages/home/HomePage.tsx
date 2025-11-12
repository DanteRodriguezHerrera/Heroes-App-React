import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"

export const HomePage = () => {

    const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all')

    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron title="Universo de SuperHéroes" description="Descubre, explora y administra super héroes y villanos" />

                {/* Breadcrumb */}
                <CustomBreadcrumbs currentPage="Super Heroes" />

                {/* Stats Dashboard */}
                <HeroStats />

                {/* Tabs */}
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
                        <TabsTrigger value="favorites" onClick={() => setActiveTab('favorites')} className="flex items-center gap-2">
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
                        <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        {/* Mostrar todos los personajes */}
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="favorites">
                        {/* Mostrar todos los personajes favoritos */}
                        <h1>Favoritos</h1>
                    </TabsContent>
                    <TabsContent value="heroes">
                        {/* Mostrar heroes */}
                        <h1>Heroes</h1>
                    </TabsContent>
                    <TabsContent value="villains">
                        {/* Mostrar villanos */}
                        <h1>Villanos</h1>
                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={8} />
            </>
        </>
    )
}

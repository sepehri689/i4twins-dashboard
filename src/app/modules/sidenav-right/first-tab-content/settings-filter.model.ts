export const commonFilters = {
    cylinderHeads: {
        title: "Cylinder Heads",
        items: [
            { label: "Valve Covers", value: "1" },
            { label: "Camshafts", value: "2" },
            { label: "Cylinder Head Bolts", value: "3" },
            { label: "Rocker Arms", value: "4" }
        ]
    },
    engineBlocks: {
        title: "Engine Blocks",
        items: [
            { label: "Pistons", value: "1" },
            { label: "Crankshafts", value: "2" },
            { label: "Bearings",value: "3" },
            { label: "Connecting Rods", value: "4" }
        ]
    },
    fuelSystems: {
        title: "Fuel Systems",
        items: [
            { label: "Fuel Injectors", value: "1" },
            { label: "Fuel Pumps", value: "2" },
            { label: "Fuel Filters", value: "3" },
            { label: "Throttle Bodies", value: "4" }
        ]
    },
    coolingSystems: {
        title: "Cooling Systems",
        items: [
            { label: "Radiators", value: "1" },
            { label: "Water Pumps", value: "2" },
            { label: "Thermostats", value: "3" },
            { label: "Fans", value: "4" }
        ]
    },
    exhaustSystems: {
        title: "Exhaust Systems",
        items: [
            { label: "Exhaust Manifolds", value: "1" },
            { label: "Catalytic Converters", value: "2" },
            { label: "Mufflers", value: "3" },
            { label: "Exhaust Pipes", value: "4" }
        ]
    }
};


export interface Province {
    id: number;
    name: string;
    center: string;
    latitude: string;
    longitude: string;
}
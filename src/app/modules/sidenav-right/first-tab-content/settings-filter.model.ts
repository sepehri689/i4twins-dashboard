export const commonFilters = {
    priceRange: {
        title: "Select Your Price Range",
        multiple: false,
        options: [
            {label: "Under $50", emoji: "💵", value: '0-50'},
            {label: "$50 - $100", emoji: "💰", value: '51-100'},
            {label: "$100 - $200", emoji: "💳", value: '101-200'},
            {label: "Over $200", emoji: "💸", value: '201-+'},
        ]
    },
    rating: {
        title: "Customer Ratings",
        multiple: false,
        options: [
            {label: "⭐⭐⭐⭐⭐ (5 stars)", value: '5'},
            {label: "⭐⭐⭐⭐ (4 stars)", value: '4'},
            {label: "⭐⭐⭐ (3 stars)", value: '3'},
            {label: "⭐⭐ (2 stars)", value: '2'},
            {label: "⭐ (1 star)", value: '1'},
        ]
    },
};

export interface Province {
    id: number;
    name: string;
    center: string;
    latitude: string;
    longitude: string;
}
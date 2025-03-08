export const getWindDirection = (deg: number): string => {
     if (deg > 15 && deg <= 75) return 'NE'

     if (deg > 75 && deg <= 105) return 'E'
     if (deg > 105 && deg <= 166) return 'SE'

     if (deg > 166 && deg <= 195) return 'S'
     if (deg > 195 && deg <= 255) return 'SW'

     if (deg > 255 && deg <= 285) return 'W'
     if (deg > 285 && deg <= 345) return 'NW'

     return 'N'
}

export const getHumidity = (level: number): string => {
     if (level <= 55) return 'Dry and comfortable'
     if (level > 55 && level <= 65) return "A bit uncomfortable, sticky feeling"
     
     return 'Lots of moisture, uncomfortable air'
}

export const getVisibility = (levisibilitynum: number): string => {
     if (levisibilitynum <= 50) return 'Dangerously foggy'
     if (levisibilitynum > 50 && levisibilitynum <= 500) return "Expect heavy fog"
     if (levisibilitynum > 500 && levisibilitynum <= 2000) return "Expect some fog"
     if (levisibilitynum > 2000 && levisibilitynum <= 9000) return "Expect some haze"


     return 'Very clear day'
}
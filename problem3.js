weather=[
    {district:"kottayam",temperature:36},
    {district:"calicut",temperature:33},
    {district:"kottayam",temperature:38},
    {district:"trissur",temperature:31},
    {district:"calicut",temperature:34},
    {district:"kottayam",temperature:39},
    {district:"trissur",temperature:37}
]
// dist with highest temp

console.log(weather.reduce((n1,n2)=>n1.temperature>n2.temperature?n1:n2).district);
//[ no,district,+ve cases,death rate,cured rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]
// district having highest +ve cases
console.log(covid_data.sort((n1,n2)=>n2[2]-n1[2])[0][1]);
// highest 1st dose
console.log(covid_data.sort((n1,n2)=>n2[5]-n1[5])[0][1]);
// lowest death rate
console.log(covid_data.sort((n1,n2)=>n1[3]-n2[3])[0][1]); 
// sort data with +ve cases in descending order


// list district with +ve cases > 15000
console.log(covid_data.filter(i=>i[2]>15000).map(i=>i[1]));

//  sort data with 1st dose vaccine


//  Print Thrissur details
console.log(covid_data.filter(i=>i[1]=="Thrissur"));
//  Print total number of positive cases
console.log(covid_data.map(i=>i[2]).reduce((n1,n2)=>n1+n2));
// . Print total number of cured case
console.log(covid_data.map(i=>i[4]).reduce((n1,n2)=>n1+n2));
//  Print cured cases in Idukki

let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

function findCourses(value1, value2) {
    let newList = [];
    for (let i = 0; i < courses.length; i++) {
        let from = courses[i].prices[0];
        let to = courses[i].prices[1];
        if (from == null) {
            from = 0;
        }
        if (to == null) {
            to = 9999;
        }
        if (value1 == null) {
            value1 = 0;
        }
        if (value2 == null) {
            value2 = 9999;
        }
        if (from >= value1 && to <= value2 ||
            from <= value2 && value2 <= to) {
            newList.push(courses[i]);
            console.log(newList);
        }
    }
}

findCourses(null, 250);
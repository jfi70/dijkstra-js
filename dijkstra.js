import { Vertex } from "./vertex.js";

const vertices = [... new Array(6)].map( (c,i) => { return new Vertex(i)});

// distances between the nodes
const graph = [
   //1  2  3  4 5 6 
    [0, 7, 9 ,0,0,14], // 1
    [7, 0, 10 ,0,0,0], // 2
    [9, 10,0 ,11,0,2], // 3
    [0, 15,11,0,6,0], // 4
    [0, 0, 0 ,6,0,9], // 5
    [14,0, 2 ,0,9,0], // 6
];


const startIndex = 0;
const endIndex = 4;
let currentIndex = startIndex;

vertices[currentIndex].distance = 0; // 
while( currentIndex !== endIndex) {
    graph[currentIndex].forEach((distance, index) => {
        // update distances 
        if (distance !== 0) {
            const v = vertices[index];
            const d = vertices[currentIndex].distance + distance;
            if (d < v.distance) {
                v.distance = d;
                v.predecessor = currentIndex;
            }
        }
    });
    vertices[currentIndex].tickOff(); // erledigt
    //
    currentIndex = vertices.filter(e => !e.visited).filter(e => e.distance < Number.POSITIVE_INFINITY).reduce((p, c) => {
        return c.distance < p.distance ? c : p;
    }, { distance: Number.POSITIVE_INFINITY }).id ;
}

vertices.map(v => { return [v.id, v.predecessor] }).forEach(v => console.log(v));

currentIndex = endIndex;
let path = "";
while (currentIndex !== startIndex) {
    path = `${path} ${ path !== "" ? "<-":""} ${currentIndex}`;
    currentIndex = vertices[currentIndex].predecessor;
}
path = `F:${path} <- ${currentIndex} :S`;
console.log(path);





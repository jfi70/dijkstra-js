
class Vertex {
    constructor(id) {
        this.distance_ = Number.POSITIVE_INFINITY;
        this.predecessor_ = null;
        this.visited_ = false;
        this.id_ = id;
    }

    get id() {
        return this.id_;
    }

    set distance(newValue) {
        this.distance_ = newValue;
    }

    set predecessor(newValue) {
        this.predecessor_ = newValue;
    }

    tickOff() {
        this.visited_ = true;
    }

    get visited() {
        return this.visited_;
    }

    get predecessor() {
        return this.predecessor_;
    }

    get distance() {
        return this.distance_;
    }
}

const vertices = [... new Array(6)].map( (c,i) => { return new Vertex(i+1)});

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

const startId = 1;
const endId = 5;

const startIndex = startId - 1;
const endIndex = endId - 1;
let currentIndex = startIndex;
let initialDistance = 0;

vertices[currentIndex].distance = 0;

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
    currentIndex = (vertices.filter(e => e.distance < Number.POSITIVE_INFINITY).filter( e => e.visited === false).reduce((p, c, i) => {
        if (c.distance < p.distance) {
            return c;
        }
        else {
            return p;
        }

    }, { distance: Number.POSITIVE_INFINITY })).id -1;
    //console.log("next node ",currentIndex+1);        
}

vertices.map(v => { return [ v.id, v.predecessor + 1 ] }).forEach(v => { console.log(v) })




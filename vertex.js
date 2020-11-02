export class Vertex {
    constructor(id) {
        this.distance_ = Number.POSITIVE_INFINITY;
        this.predecessor_ = null;
        this.visited_ = false;
        this.id_ = id;
    }

    tickOff() {
        this.visited_ = true;
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
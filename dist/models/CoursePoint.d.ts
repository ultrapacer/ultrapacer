export class CoursePoint {
    constructor(course: any, point: any, loop: any);
    point: any;
    course: any;
    loop: any;
    get lat(): any;
    get lon(): any;
    get alt(): any;
    get latlon(): any;
    get grade(): number;
    get loc(): number;
}

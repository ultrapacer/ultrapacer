export namespace defaults {
    let a: number;
    let b: number;
    namespace lower {
        export let lim: number;
        export let m: number;
        let b_1: number;
        export { b_1 as b };
    }
    namespace upper {
        let lim_1: number;
        export { lim_1 as lim };
        let m_1: number;
        export { m_1 as m };
        let b_2: number;
        export { b_2 as b };
    }
}

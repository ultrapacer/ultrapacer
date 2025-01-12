import { Site } from './site';
/**
 * Waypoint type
 */
export interface Waypoint extends Pick<Site, 'alt' | 'description' | 'lat' | 'lon' | 'name' | 'tier' | 'type'> {
    /**
     * cutoff time for the waypoint
     */
    readonly cutoff?: number | undefined;
    /**
     * whether the waypoint has a typical delay
     */
    readonly hasTypicalDelay: boolean;
    /**
     * location along the course (in km)
     */
    readonly loc: number;
    /**
     * loop number (1-indexed)
     */
    readonly loop: number;
    /**
     * site for the waypoint
     */
    readonly site: Site;
}

import { CommunityInteraction } from "./community-interaction.model";
import { SportType } from "./enum/sport-type.enum";
import { Type } from "./enum/type.enum";

export interface Activity {
    id: number;
    name: string;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    total_elevation_gain: number;
    kudos_count: number;
    type: Type;
    sportType: SportType;
    workoutType: any;
    communityInteraction: CommunityInteraction;
}
export type EventData = {
    event_id: string;
    event_title: string;
    event_description?: string;
    event_img?: string;
    event_start_time: number;
    event_end_time: number;
    event_type: string;
    event_tag: string;
}
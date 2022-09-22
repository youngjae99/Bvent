export interface Event {
  event_id: string;
  event_title: string;
  event_description?: string;
  event_img?: string;
  event_start_time: number;
  event_end_time: number;
  event_type: string;
  event_tag: string;
}

export interface Subevent {
  event_title: string;
  subevent_title: string;
  subevent_date: string;
  subevent_id: string;
  subevent_img: string;
  subevent_info: string;
  subevent_presenter: string;
  subevent_src: string;
  subevent_time: number;
}

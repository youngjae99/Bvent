import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import styled from 'styled-components';

import { Button } from '@components/Button';
import EventCard from '../eventpage/Card';
import { eventState } from '@recoil/atoms/events';
import { GradientText } from '@components/Text/GradientText';
import EventAPI from '@api/event';
import GradientBar from './GradientBar';

export const Main: React.FC = () => {
    const [events, setEvents] = useRecoilState(eventState);

    useEffect(() => {
        const getEventData = async () => {
            const res = await EventAPI.getAll();
            setEvents(res);
        };
        getEventData();
    }, []);

    return (
        <div className="flex flex-row">
            <GradientBar />
            <div className="text-center font-light py-5 flex-1">
                <GradientText
                    style={{
                        textAlign: 'left',
                        width: '100%',
                        fontSize: '1.5rem',
                    }}
                >
                    Ongoing Events
                </GradientText>
                <div className="container mx-auto flex flex-col gap-2">
                    {events &&
                        Object.keys(events)
                            .filter(
                                (key) => events[key].event_tag === 'current'
                            )
                            .map((key) => <EventCard event={events[key]} />)}
                    <a href="/now" className="text-white text-right">
                        see more
                    </a>
                </div>

                <div className="container mx-auto mt-10 flex flex-col gap-2">
                    <GradientText
                        style={{
                            textAlign: 'left',
                            width: '100%',
                            fontSize: '1.5rem',
                        }}
                    >
                        Past Events
                    </GradientText>
                    {events &&
                        Object.keys(events)
                            .filter((key) => events[key].event_tag === 'past')
                            .map((key) => <EventCard event={events[key]} />)}
                    <a href="/past" className="text-white text-right">
                        see more
                    </a>
                </div>

                <div className="container mx-auto mt-10 flex flex-col gap-2">
                    <GradientText
                        style={{
                            textAlign: 'left',
                            width: '100%',
                            fontSize: '1.5rem',
                        }}
                    >
                        Upcoming Events
                    </GradientText>
                    {events &&
                        Object.keys(events)
                            .filter((key) => events[key].event_tag === 'future')
                            .map((key) => <EventCard event={events[key]} />)}
                    <a href="/future" className="text-white text-right">
                        see more
                    </a>
                </div>
            </div>
        </div>
    );
};

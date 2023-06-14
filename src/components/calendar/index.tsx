"use client";
import React, { useState } from 'react';
import { Calendar } from 'react-calendar';

const BCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar value={value} />
        </div>
    );
}
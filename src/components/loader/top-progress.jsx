import React, { useState, useEffect } from 'react';
import {Top} from '../progress';

function TopProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
              const diff = Math.random() * 10;
              return Math.min(oldProgress + diff, 100);
            });
          }, 200);
      
          return () => {
            clearInterval(timer);
          };
    }, []);
    return <Top value={progress} />
}

export default TopProgress;
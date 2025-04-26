import React, { useState, useEffect, useRef } from 'react';
import styles from './CircularProgress.module.scss';

interface CircularProgressProps {
  initialValue?: number;
  maxValue?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  initialValue = 0,
  maxValue = 180,
}) => {
  const [value, setValue] = useState<number>(initialValue);
  const halfCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update rotation when value changes
    const rotationDegree = 224 - value;
    if (halfCircleRef.current) {
      halfCircleRef.current.style.transform = `rotate(-${rotationDegree}deg)`;
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 0;
    setValue(newValue);
  };

  return (
    <div className={styles.main}>
      <div className={styles.dashboard}>
        <div className={styles.circleOne}>
          <div className={styles.circleTow}>
            <div className={styles.numberText}>{value}</div>
          </div>
          <div className={styles.circleHide}>
            <div 
              ref={halfCircleRef} 
              className={styles.rotatedHalfCircle}
            >
              <div className={styles.rotatedHalfCircles}></div>
            </div>
          </div>
          <div className={styles.num}></div>
        </div>
      </div>
      <div className={styles.get}>
        <input 
          type="number" 
          value={value} 
          onChange={handleInputChange} 
          min="0" 
          max={maxValue}
        />
      </div>
    </div>
  );
};

export default CircularProgress;
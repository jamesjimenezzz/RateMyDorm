import React, { useState } from "react";

export const Fibonacci = () => {
  
  const generateFibonacci = (n: number): number[] => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fib: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  };

}












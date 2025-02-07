import { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from './useAuth';

export const Dashboard = ({code}) => {
  return(
    <div>{code}</div>
  )
}

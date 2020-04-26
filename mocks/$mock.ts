/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'axios-mock-server'
import mock0 from './api/users/user'
import mock1 from './api/login'

export default (client?: AxiosInstance) => mockServer([
  {
    path: '/api/users/user',
    methods: mock0
  },
  {
    path: '/api/login',
    methods: mock1
  }
], client, '')

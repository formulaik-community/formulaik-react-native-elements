import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField'
import { AdapterMoment as dateAdapter } from '@mui/x-date-pickers/AdapterMoment'

export default (props) => {
  const { onValueChanged, value, item: { params } } = props
  return <LocalizationProvider dateAdapter={dateAdapter}>
    <DateTimePicker
      disabled={props.disabled}
      readOnly={props.readOnly}
      value={value}
      onChange={(_v) => {
        onValueChanged(_v._d)
      }}
      {...params}
      renderInput={(_params) => <TextField {..._params} />}
    />
  </LocalizationProvider>
}

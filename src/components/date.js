import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { RangePicker, theme } from 'react-trip-date';
import { ThemeProvider } from 'styled-components';

const  handleResponsive  =  setNumberOfMonth  =>  {
	let  width  =  document.querySelector('.tp-calendar').clientWidth;
	if  (width  >  900)  {
		setNumberOfMonth(3);
	}  else  if  (width  <  900  &&  width  >  580)  {
		setNumberOfMonth(2);
	}  else  if  (width  <  580)  {
		setNumberOfMonth(1);
	}
};
	
class date extends Component {

  onChange = date => {
    let message;
    switch (date.length){
      case 0:
        message = 'You havent saleted any date yet.';
        break;
      case 1:
        message = "Your date of departure is " + date + ", but ou havent saleted the return date. Are you gonna stay there forever?";
        break;
      case 2:
        message = "Your jurney will start " + date[0] + ", and finish " + date[1];
        break;
      default:
    }
    document.getElementById('summary-date').innerText = message;
  }

  render() {
    return (
      <>
        <h1 id='date-header'>Choose date of departure and arrival</h1>
        <ThemeProvider theme={theme}>
          <RangePicker
            handleChange={this.onChange}
            // numberOfSelectableDays={2}
            hoverable='true'
            responsive={handleResponsive}
            disabledBeforeToday='true'
          />
        </ThemeProvider>
        <Link activeClass='active'
          to='passengers'
          spy={true}
          smooth={true}
          duration={1000}>
            <button type='button' id='date-button' className='button' >Next step</button>
        </Link>
      </>
    );
  }
}

export default date;
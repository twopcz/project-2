import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import Calendar from 'react-calendar';
import './Home.css';

const state = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: 'salmon',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [65, 59, 80]
    }
  ]
};

const state2 = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Orders',
      backgroundColor: ['red', 'blue', 'green'],
      hoverBackgroundColor: ['#501800', '#501800', '#501800'],
      data: [100, 70, 150]
    }
  ]
};

export default function Home(props) {
  return (
    <div className='Home'>
      <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3'>
        <div>
          <h2 className='font-weight-bold'>Welcome {props.name}</h2>
        </div>
        <div className='search-box'>
          <input
            className='form-control'
            type='text'
            placeholder='Search'
            aria-label='Search'
          ></input>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6 col-xl-3 mb-4'>
          <div className='card border-primary h-100 py-2'>
            <div className='card-body'>
              <div className='row no-gutters align-items-center'>
                <div className='col mr-2'>
                  <div className='text-xs font-weight-bold text-primary text-uppercase -mb-1'>
                    Earnings (Monthly)
                  </div>
                  <div className='h5 mb-0 font-weight-bold text-gray-800'>
                    $50,000
                  </div>
                </div>
                <div className='col-auto'>
                  <i className='fas fa-dollar-sign'></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-xl-3 mb-4'>
          <div className='card border-success h-100 py-2'>
            <div className='card-body'>
              <div className='row no-gutters align-items-center'>
                <div className='col mr-2'>
                  <div className='text-xs font-weight-bold text-primary text-uppercase -mb-1'>
                    Earnings (Annual)
                  </div>
                  <div className='h5 mb-0 font-weight-bold text-gray-800'>
                    $500,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-xl-3 mb-4'>
          <div className='card border-info h-100 py-2'>
            <div className='card-body'>
              <div className='row no-gutters align-items-center'>
                <div className='col mr-2'>
                  <div className='text-xs font-weight-bold text-primary text-uppercase -mb-1'>
                    Orders
                  </div>
                  <div className='h5 mb-0 font-weight-bold text-gray-800'>
                    50
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-xl-3 mb-4'>
          <div className='card border-warning h-100 py-2'>
            <div className='card-body'>
              <div className='row no-gutters align-items-center'>
                <div className='col mr-2'>
                  <div className='text-xs font-weight-bold text-primary text-uppercase -mb-1'>
                    Testing
                  </div>
                  <div className='h5 mb-0 font-weight-bold text-gray-800'>
                    zzzzz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-7 col-md-6'>
          <div className='card mb-4'>
            <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
              <h6 className='m-0 font-weight-bold'>Earnings</h6>
            </div>
            <div className='card-body'>
              <Line
                data={state}
                options={{
                  title: {
                    display: true,
                    text: 'Average Sales/Month',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className='col-xl-5 col-md-6'>
          <div className='card mb-4'>
            <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
              <h6 className='m-0 font-weight-bold'>Orders</h6>
            </div>
            <div className='card-body orders'>
              <Doughnut
                data={state2}
                options={{
                  title: {
                    display: true,
                    text: 'Average Orders/Month',
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: 'right'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-8 col-md-7'>
          <div className='card mb-4'>
            <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
              <h6 className='m-0 font-weight-bold'>Vendors</h6>
            </div>
            <div className='card-body'>asdfasdf</div>
          </div>
        </div>

        <div className='col-xl-4 col-md-5'>
          <div className='card mb-4'>
            <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
              <h6 className='m-0 font-weight-bold'>Upcoming</h6>
            </div>
            <div className='card-body justify-content-center'>
              <Calendar />
              <div className='pt-3'>
                <span>placeholder, interactive calendar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

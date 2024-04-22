import '../css/Footer.css';
import React from 'react';

function Footer() {
  return (
    <div className='Footer-Parent'>
      <div className='Footer-Container'>
        <section>
          <p>Contact info</p>
          <ul>
            <li>London SW11 8AY, United Kingdom</li>
            <li>+44 10 3333 4444</li>
            <li>info@littlelemon.com</li>
          </ul>
          <p>Social media links</p>
          <ul>
            <li><a href='https://www.facebook.com' target='_blank'>Facebook</a></li>
            <li><a href='https://www.instagram.com' target='_blank'>Instagram</a></li>
            <li><a href='https://www.x.com' target='_blank'>X (Twitter)</a></li>
          </ul>
        </section>
        <section>
          <p>Opening hours</p>
          <table>
            <tbody>
              <tr>
                <td className='Footer-td-left'>Monday</td>
                <td className='Footer-td-right'>11 am - 11 pm</td>
              </tr>
              <tr>
                <td className='Footer-td-left'>Tuesday</td>
                <td className='Footer-td-right'>11 am - 11 pm</td>
              </tr>
              <tr>
                <td className='Footer-td-left'>Wednesday</td>
                <td className='Footer-td-right'>11 am - 11 pm</td>
              </tr>
              <tr>
                <td className='Footer-td-left'>Thursday</td>
                <td className='Footer-td-right'>11 am - 11 pm</td>
              </tr>
              <tr>
                <td className='Footer-td-left'>Friday</td>
                <td className='Footer-td-right'>11 am - 12 am</td>
              </tr>
              <tr>
                <td className='Footer-td-left'>Saturday</td>
                <td className='Footer-td-right'>11 am - 12 am</td>
              </tr>
              <tr>
                <td className='Footer-td-left'>Sunday</td>
                <td className='Footer-td-right'>11 am - 10 pm</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default Footer;
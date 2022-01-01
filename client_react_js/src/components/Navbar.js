import React from 'react';
import '../Styles/navst.css'
class Nav extends React.Component{


    render() {
        return (
            <div style={{width:'100vw'}}>
               <table className='tab'>
                   <tr>
                       <td className='navL'>
                            Sifra
                       </td>



                       <td className='navM'>
                           <center>
                           <table style={{width:'100%',maxWidth:'400px'}}>
                                   <tr>
                                       <td>
                                           Home
                                       </td>
                                       <td>
                                           About
                                       </td>
                                       <td>
                                           Pricing
                                       </td>
                                       <td>
                                           Contact
                                       </td>
                                   </tr>
                               </table>



                           </center>
                       
                       </td>





                       <td className='navR'>
                           <div className='navRb'>
                               <table style={{width:'100%',maxWidth:'150px'}}>
                                   <tr>
                                       <td >
                                           SignUp
                                       </td>
                                       <td >
                                           SignIn
                                       </td>
                                   </tr>
                               </table>
                               
                           </div>
                       </td>
                       


                   </tr>

               </table>
            </div>
        )
    }
}

export  default Nav;
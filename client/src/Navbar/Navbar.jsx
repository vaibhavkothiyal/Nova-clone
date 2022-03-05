import './Navbar.css'
import { BsArrowRight } from 'react-icons/bs';
import { useEffect } from 'react';
export const Navbar = () => {

    useEffect(() => {
        let setActive = document.getElementById('navbarChild2Id')
        let btn = setActive.getElementsByClassName('navbarChild2subchild')

        for(let i=0;i<btn.length;i++){
            btn[i].addEventListener('click',function(){
                let current=document.getElementsByClassName('active');
                current[0].className=current[0].className.replace(" active")
                this.className=this.className+" active"
            })
        }
    })

    return <>
        <div className="NavbarContainer">
            <div className="navBarParent">
                <div className="navbarChild1"><span><img className='navbarLogoImg' src="https://www.novabenefits.com/img/logo-main.4db1e1bc.svg" alt="" /></span></div>
                <div id='navbarChild2Id' className="navbarChild2">
                    <div className="navbarChild2subchild mainNavbarHome active">Home</div>
                    <div className="navbarChild2subchild">Community</div>
                    <div className="navbarChild2subchild">Blog</div>
                    <div className="navbarChild2subchild">AboutUs</div>
                    <div className="navbarChild2subchild login-get-in-touch-parent">
                        <div className="navbarChild2subchild mainNavbarLogin">Login{<BsArrowRight className='loginArroyIcon' />}</div>
                        <div className="navbarChild2subchild mainNavbarGetInTouch">Get In Touch</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
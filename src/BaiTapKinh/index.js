import React, { Component } from 'react'
import danhSachSanPham from "./data.json";

export default class BaiTapThuKinh extends Component {
    state = {
        product:{
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    testGlass = (product) =>{
        this.setState({
            product,
        })
    }
    renderDanhSachSanPham = () => {
        return danhSachSanPham.map((sanPham, index) => {
            return <div className="col-2 item border border-success p-2 m-2" key={index} 
            style={{cursor:'pointer'}}
            onClick={()=>{
                this.testGlass(sanPham)
            }}>
                <img src={sanPham.url} className="img-fluid"></img>
            </div>
        })
    }


    render() {
        return (

            <div className="" style={{ backgroundImage: 'url(./img/background.jpg)', width: '100%', height: '100%', position: 'fixed', top: '0', left: '0', backgroundRepeat: 'none', backgroundSize: 'cover' }}>
                <div className="position-absolute" style={{width: '100%', height: '100%', backgroundColor:'#8B888F80'}}></div>
                <div className="w-100 py-3 bg-dark text-white" style={{position:'relative',zIndex:5}}>
                    <h2 className="display-4"> TRY GLASSES APP ONLINE</h2>
                </div>
                <div className="container position-relative">
                    <div className="row py-4">
                        <div className="col-6">
                            <div className="col-8 w-100 position-relative p-0 item mx-auto">
                                <img src="./img/model.jpg" className="img-fluid "></img>
                                <img src={this.state.product.url} className="position-absolute" style={{ top: '26%', left: '50%', width: '169px', transform: 'translateX(-50%)' }}></img>
                                <div className="position-absolute text-white p-2 w-100" style={{ bottom: '0', left: '0',backgroundColor:'#D98E3990' }}>
                                    <h4 className="display-5">{this.state.product.name}</h4>
                                    <p>{this.state.product.desc}</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-6" >
                            <div className="col-8 w-100 item mx-auto">
                                <img src="./img/model.jpg" className="img-fluid position-relative"></img>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 p-3 bg-white">
                        {this.renderDanhSachSanPham()}
                    </div>

                </div>
            </div>
                

        )
    }
}

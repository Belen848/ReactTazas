import Card from "../assets/components/Card"
import { useNavigate } from 'react-router-dom';

function CatalogoTazones({ agregarAlCarrito }) {
    return (
        <>
            <br />
            <br />
            <br />
            <br />

            <main className="catalogCards">

                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col">
                            <Card agregarAlCarrito={agregarAlCarrito} productId={10} image="../../public/images/tazon_rosa.png" name="Taza Sonrisa Rosa" description="Taza hecha de cerámica con temática de dibujitos"></Card>
                        </div>
                        <div className="col">
                            <Card agregarAlCarrito={agregarAlCarrito} productId={11} image="../../public/images/tazon_sonic.webp" name="Taza Sonic" description="Taza hecha de cerámica con temática de dibujitos"></Card>
                        </div>
                        <div className="col">
                            <Card agregarAlCarrito={agregarAlCarrito} productId={12} image="../../public/images/tazon_monster-inc.jpg" name="Taza Monsters INC" description="Taza hecha de cerámica con temática de Monsters INC"></Card>
                        </div>
                    </div>
                </div>

                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col">
                            <Card agregarAlCarrito={agregarAlCarrito} productId={13} image="../../public/images/tazon_mike-w.jpg" name="Taza Mike Wazowski" description="Taza hecha de cerámica con temática de Mike Wazowski"></Card>
                        </div>
                        <div className="col">
                            <Card agregarAlCarrito={agregarAlCarrito} productId={14} image="../../public/images/tazon_bart.jpeg" name="Taza Bart Simpson" description="Taza hecha de cerámica con temática de Los Simpsons."></Card>
                        </div>
                        <div className="col">
                            <Card agregarAlCarrito={agregarAlCarrito} productId={15} image="../../public/images/tazon_meeseeks.jpg" name="Taza Meeseeks" description="Taza hecha de cerámica con tematica de Rick and Morty"></Card>
                        </div>
                    </div>

                </div><div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col">
                            <Card agregarAlCarrito={agregarAlCarrito} productId={16} image="../../public/images/tazon_kitty.jpg" name="Taza Kitty" description="Taza hecha de cerámica con temática de Kitty"></Card>
                        </div>
                        <div className="col">
                            <Card agregarAlCarrito={agregarAlCarrito} productId={17} image="../../public/images/Tazon_grogu.webp" name="Taza Grogu" description="Taza hecha de cerámica con temática de Mandalorian"></Card>
                        </div>
                        <div className="col">
                            <Card agregarAlCarrito={agregarAlCarrito} productId={18} image="../../public/images/compadre.webp" name="Taza Calavera" description="Taza re fachera"></Card>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default CatalogoTazones;
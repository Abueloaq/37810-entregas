
import { useState, useContext } from 'react';
import { CartContext } from "./CartContext"
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import { provider } from "../utils/authGoogleProviderCreate"
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

const Checkout = () => {

    const auth = getAuth();

    const [googleUser, setGoogleUser] = useState();

    const authResult = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          setGoogleUser(result.user);
        }).catch((error) => {
          const errorCode = error.code;
          console.log(errorCode)
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    }

    const googleLogOut =()=>{
        signOut(auth).then(() => {
            setGoogleUser();
          }).catch((error) => {
            console.log(error)
          });
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [phone, setPhone] = useState("");
    const [orderID, setOrderID] = useState();
    const [isActive, setIsActive] = useState(false);

    const { compra } = useContext(CartContext);
    const { clear } = useContext(CartContext);
    const { totalPrice } = useContext(CartContext);
    

    const createOrder=()=> {
        
        if ((email === emailConfirmation) && ( email !== "")){
         
        setIsActive(false)
            
        const itemsForDB = compra.map(item => ({
            id: item.id,
            price: item.price,
            title: item.name,
            qty: item.cantidad
        }))

        let order = {
            buyer: {
                email: email,
                name: name,
                phone: phone
            },
            date: serverTimestamp(),
            total: totalPrice,
            items: itemsForDB,
            estado: "Generada"
        }

        const createFirestoreOrder = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createFirestoreOrder()
            .then(res => setOrderID(res.id))
            .catch(err => console.log(err))

        compra.forEach( async (item) => {
            const itemRef = doc (db, "products", item.id)
            await updateDoc(itemRef, {
                stock: increment(-item.cantidad)
            })
        })

        clear();
        } else {
            setIsActive(true)
        }
    };

    const createOrderGoogle=()=> {

        const itemsForDB = compra.map(item => ({
            id: item.id,
            price: item.price,
            title: item.name,
            qty: item.cantidad
        }))

        let order = {
            buyer: {
                email: googleUser.email,
                name: googleUser.displayName,
                phone: googleUser.phoneNumber
            },
            date: serverTimestamp(),
            total: totalPrice,
            items: itemsForDB,
            estado: "Generada"
        }

        const createFirestoreOrder = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createFirestoreOrder()
            .then(res => setOrderID(res.id))
            .catch(err => console.log(err))

        compra.forEach( async (item) => {
            const itemRef = doc (db, "products", item.id)
            await updateDoc(itemRef, {
                stock: increment(-item.cantidad)
            })
        })

        clear();
    };

    let subTotal = (totalPrice / 1.22).toFixed(2);

    return (
        <>
        { (orderID) ? 
            <div>
                <p className="text-light">Felicitaciones tu compra fue realizada con éxito</p>
                <p className="text-light">Tu referencia de orden es: {orderID}</p>
            </div>
            
            :
            <div>
                { (googleUser) ? 
                <div>
                    <h4 className="text-light">Checkout as</h4>
                    <h4 className="text-light">{googleUser.displayName}</h4>
                    <button type="button" className="btn btn-outline-info text-light" onClick={googleLogOut}>Cerrar sesión</button>
                    <div className="cart-body">
                            <div className="cart-summary">
                                <div className="cart-breakdown">
                                    <h5 className="text-light">Subtotal USD {subTotal}</h5>
                                    <h5 className="text-light">IVA USD {(totalPrice - subTotal).toFixed(2)}</h5>
                                </div>
                                <h3 className="text-light">TOTAL USD {totalPrice}</h3>
                                <button type="button" className="btn btn-outline-info text-light" onClick={createOrderGoogle}>Checkout Now</button>
                            </div>
                        </div>
                </div>
                    :
                    <div>
                        <button type="button" className="btn btn-outline-secondary text-light" onClick={authResult}>Inicia sesión con Google</button>
                        <hr></hr>
                        <p className="text-light">or</p>
                        <hr></hr>
                        
                        <form className="mx-1">
                            <div className="checkout-form">
                                <label className="text-light">Ingresa tu nombre y apellido:
                                <input
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                </label>
                                <label className="text-light">Ingresa tu teléfono:
                                <input
                                    type="text" 
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                                </label>
                                <label className="text-light">Ingresa tu email:
                                <input
                                    type="text" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                </label>
                                <label className="text-light">Confirma tu email:
                                <input
                                    type="text" 
                                    value={emailConfirmation}
                                    onChange={(e) => setEmailConfirmation(e.target.value)}
                                />
                                </label>
                                <p className={isActive ? 'text-light' : 'disp-none text-light'}>Email incorrecto</p>
                            </div>
                        </form>
                        
                        <div className="cart-body">
                            <div className="cart-summary">
                                <div className="cart-breakdown">
                                    <h5 className="text-light">Subtotal USD {subTotal}</h5>
                                    <h5 className="text-light">IVA USD {(totalPrice - subTotal).toFixed(2)}</h5>
                                </div>
                                <h3 className="text-light">TOTAL USD {totalPrice}</h3>
                                <button type="button" className="btn btn-outline-info text-light" onClick={createOrder}>Checkout Now</button>
                            </div>
                        </div>
                        
                    </div>}
            </div>
        }
    </>
    )


}

export default Checkout
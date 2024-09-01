import React, { useState } from 'react';
import CustomInput from './CustomInput';


const AddTokenModal = () => {
  const openModal = () => {
    const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  

  const [tokenAddress, settokenAddress] = useState("")
  const [fee, setFee] = useState("")
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  const isFormFilled = tokenAddress && fee && min && max

  return (
    <div>
      <button className="btn" onClick={openModal}>Open Modal</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* If there is a button in the form, it will close the modal */}
              <CustomInput
              type="string"
              name="string"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => settokenAddress(e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />
            <CustomInput
              type="number"
              name="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFee(e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />


<CustomInput
              type="number"
              name="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMin(e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />


<CustomInput
              type="number"
              name="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMax(e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />


            <button disabled={!isFormFilled}>Add</button>
              <button className="btn" >Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddTokenModal;

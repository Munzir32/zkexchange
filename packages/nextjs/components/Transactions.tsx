import React from 'react';
import Transaction from './Transaction';
// import { useScaffoldReadContract } from '~~/hooks/scaffold-eth';

// Define the structure of your data
// interface SellOrderPlaced {
//   currency: string;
//   id: string;
//   orderId: string;
//   seller: string;
//   token: string;
//   amountInCurrency: string;
//   amountInToken: string;
// }

// interface SellOrderPlacedsData {
//   sellOrderPlaceds: SellOrderPlaced[];
// }

const Transactions = () => {

  

  // console.log(data?.sellOrderPlaceds, status);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Amount Currency</th>
              <th>Currency</th>
              <th>Token Amount</th>
            </tr>
          </thead>
          <>
            <Transaction 
            // key={item.orderId} 
            // currency={item.currency}
            // amountInCurrency={item.amountInCurrency}
            // amountInToken={item.amountInToken}
            // orderId={item.orderId}
            // token={item.token}
            // seller={item.seller}  
            />
          
        
        </>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

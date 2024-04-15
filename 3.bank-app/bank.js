class bank_accout{
   constructor(Account_Number,Ower_Name,Balance){
      this.Account_Number = Account_Number;
      this.Ower_Name = Ower_Name;
      this.Balance = Balance;
      
      console.log(`Account-Number is : ${this.Account_Number}`);
      console.log(`Ower_Name is : ${this.Ower_Name}`);
      console.log(`Balance ${Balance}`);
   }
    
   
   Deposite(ammout1){
      this.Balance = this.Balance + ammout1;
      console.log(`Deposited ${ammout1}`)
   }
 
   withdrawal(ammout2){
      if(this.Balance >= ammout2){
         this.Balance = this.Balance - ammout2;
         console.log(`withdrawal ${ammout2}`)
      }
      else{
         console.log("Insufficient Balance");
      }
   }
   mainBalance(){
      return `New Balance ${this.Balance}`
   }
 }
 
 console.log('Initial_Information:')
 const object = new bank_accout(61148,'Shafiul',1000);
 
 
 console.log('Deposite and withdrow:');
 object.Deposite(2000);
 object.withdrawal(500);
 
 console.log(object.mainBalance());
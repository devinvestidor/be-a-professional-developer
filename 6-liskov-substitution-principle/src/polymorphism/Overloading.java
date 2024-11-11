class MathOperation {
    public int sum(int a, int b) { return a + b; }  
    public long sum(long a, long b) { return a + b; }
}

System.out.println("sum int: " + new MathOperation().sum(1, 2));
System.out.println("sum long: " + new MathOperation().sum(3L, 5L));


class Product {
    public int buy(int price) { return price; } 
    public int buy(int price, int discount) { return price - discount; }
}

System.out.println("Buying product... Final price: " + new Product().buy(10));
System.out.println("Buying product... Final price: " + new Product().buy(10, 2));
export default function(){
  this.transition(
    this.fromRoute('carts'),
    this.toRoute('cart'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}

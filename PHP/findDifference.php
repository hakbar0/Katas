function findDifference(array $a, array $b): int {
  $sumA = array_product($a);
  $sumB = array_product($b);
  return abs($sumA - $sumB); 
}

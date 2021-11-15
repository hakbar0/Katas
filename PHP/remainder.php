function remainder(int $a, int $b) {
  $min = min($a, $b);
  $max = max($a, $b);
  return $min == 0 ? null : $max % $min;
}

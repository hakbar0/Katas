function square_sum(array $numbers) : int {
  return array_sum(array_map("square", $numbers));
}

function square(int $e): int {
  return $e*$e;
}
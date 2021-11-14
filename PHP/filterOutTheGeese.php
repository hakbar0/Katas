function gooseFilter(array $birds): array {
  $geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  $diff = array_diff($birds, $geese);
  return array_values($diff);
}

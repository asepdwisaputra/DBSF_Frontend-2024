package main

import "fmt"

func main() {
	a := 2

	if a%2 == 0 {
		genap := true
	}

	if genap {
		fmt.Println("Genap!")
	}
}

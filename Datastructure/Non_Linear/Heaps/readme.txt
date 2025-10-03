Final Checklist (Heaps & PQ Learning Roadmap)

1. Heap structure + array representation
2. Heap operations (insert, delete, peek)
3. Priority Queue abstraction
4. Top-K problems with heaps
5. Streaming median (two heaps)
6. Dijkstra’s shortest path (min-PQ)
7. Scheduling/Load balancing with PQ
8. Heapsort (sorting using heap property)

Video - https://www.youtube.com/watch?v=hW8PrQrvMNc&list=PL_z_8CaSLPWdtY9W22VjnPxG30CXNZpI9

If ask - 

If in the array find small and max => 

Kth Largest -> Create Min Heap - Minimum element on top
Kth Smallest -> Crate Max Heap - Maximum element on top


what a (min) heap is

think of a triangle of buckets (a binary tree).

rule: every parent is ≤ each of its children (for a min-heap; for max-heap it’s ≥).

that’s it. not “each level bigger than the previous” globally—only the parent vs its own children rule.

array picture ↔️ tree picture

we don’t store pointers. we store the heap in an array and use index math to hop around:

for a node at index i (0-based):

left child: 2*i + 1

right child: 2*i + 2

parent: floor((i - 1) / 2)

so this array:

index:  0   1   2   3   4   5   6
value: [10, 20, 33, 72, 101, 2, 45]

quick cheatsheet

parent: p = floor((i - 1)/2)

left: l = 2*i + 1

right: r = 2*i + 2

push → sift up (bubble up)

pop → sift down (sink down)

both are O(log n) because the tree’s height is ~log2(n)
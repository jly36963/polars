window.SIDEBAR_ITEMS = {"derive":[["AnyBitPattern","Derive the `AnyBitPattern` trait for a struct"],["ByteEq","Derive the `PartialEq` and `Eq` trait for a type"],["ByteHash","Derive the `Hash` trait for a type"],["CheckedBitPattern","Derive the `CheckedBitPattern` trait for a struct or enum."],["Contiguous","Derive the `Contiguous` trait for an enum"],["NoUninit","Derive the `NoUninit` trait for a struct or enum"],["Pod","Derive the `Pod` trait for a struct"],["TransparentWrapper","Derive the `TransparentWrapper` trait for a struct"],["Zeroable","Derive the `Zeroable` trait for a struct"]],"enum":[["PodCastError","The things that can go wrong when casting between [`Pod`] data forms."]],"fn":[["bytes_of","Re-interprets `&T` as `&[u8]`."],["bytes_of_mut","Re-interprets `&mut T` as `&mut [u8]`."],["cast","Cast `T` into `U`"],["cast_mut","Cast `&mut T` into `&mut U`."],["cast_ref","Cast `&T` into `&U`."],["cast_slice","Cast `&[A]` into `&[B]`."],["cast_slice_mut","Cast `&mut [T]` into `&mut [U]`."],["from_bytes","Re-interprets `&[u8]` as `&T`."],["from_bytes_mut","Re-interprets `&mut [u8]` as `&mut T`."],["pod_align_to","As `align_to`, but safe because of the [`Pod`] bound."],["pod_align_to_mut","As `align_to_mut`, but safe because of the [`Pod`] bound."],["pod_read_unaligned","Reads the slice into a `T` value."],["try_cast","Try to cast `T` into `U`."],["try_cast_mut","Try to convert a `&mut T` into `&mut U`."],["try_cast_ref","Try to convert a `&T` into `&U`."],["try_cast_slice","Try to convert `&[A]` into `&[B]` (possibly with a change in length)."],["try_cast_slice_mut","Try to convert `&mut [A]` into `&mut [B]` (possibly with a change in length)."],["try_from_bytes","Re-interprets `&[u8]` as `&T`."],["try_from_bytes_mut","Re-interprets `&mut [u8]` as `&mut T`."],["try_pod_read_unaligned","Reads from the bytes as if they were a `T`."]],"macro":[["offset_of","Find the offset in bytes of the given `$field` of `$Type`. Requires an already initialized `$instance` value to work with."]],"mod":[["checked","Checked versions of the casting functions exposed in crate root that support [`CheckedBitPattern`] types."]],"trait":[["AnyBitPattern","Marker trait for “plain old data” types that are valid for any bit pattern."],["Contiguous","A trait indicating that:"],["NoUninit","Marker trait for “plain old data” types with no uninit (or padding) bytes."],["Pod","Marker trait for “plain old data”."],["PodInOption","Trait for types which are Pod when wrapped in Option."],["TransparentWrapper","A trait which indicates that a type is a `#[repr(transparent)]` wrapper around the `Inner` value."],["Zeroable","Trait for types that can be safely created with `zeroed`."],["ZeroableInOption","Trait for types which are Zeroable when wrapped in Option."]]};
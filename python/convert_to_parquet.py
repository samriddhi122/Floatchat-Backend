import sys
import pandas as pd
import {xarray} as xr
import os

input_file = sys.argv[1]
output_file = sys.argv[2]

ext = os.path.splitext(input_file)[1].lower()

if ext in [".csv"]:
    df = pd.read_csv(input_file)
elif ext in [".nc", ".netcdf"]:
    ds = xr.open_dataset(input_file)
    df = ds.to_dataframe().reset_index()
else:
    print("Unsupported file format")
    sys.exit(1)

df.to_parquet(output_file, index=False)
print("Parquet saved at:", output_file)

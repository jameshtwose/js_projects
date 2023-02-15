# %%
import pandas as pd
import json
from jmspack.frequentist_statistics import correlation_analysis
from IPython.display import display
# %%
# df = pd.read_csv(
    # "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/penguins.csv")
df = pd.read_csv("https://raw.githubusercontent.com/mwaskom/seaborn-data/master/brain_networks.csv",
                 skiprows=[1, 2, 3])
df.head()
# %%
cor_df = correlation_analysis(data=df)["summary"]
# %%
cor_df = (cor_df
          .assign(**{"rabs": lambda x: x["r-value"].abs()})
          .loc[lambda x: x["rabs"] > 0.25, :]
        #   .loc[lambda x: x["p-value"] < 0.000000001, :]
          .round(3)
          )
display(cor_df.head()); cor_df.shape
# %%
# j_df = json.loads(open("../../network_graph_v3/data/miserables.json").read())

# %%
nodes_list_dict = (cor_df[["feature1", "feature2"]]
                   .melt()
                   [["value"]]
                   .rename(columns={"value": "id"})
                   .drop_duplicates()
                   .assign(**{"group": lambda d: range(1, d["id"].shape[0]+1)})
                   .to_dict(orient="records")
                   )
links_list_dict = cor_df[["feature1", "feature2", "rabs"]].rename(
    columns={"feature1": "source", "feature2": "target", "rabs": "value"}).to_dict(orient="records")

# %%
with open('brain_networks_corrs.json', 'w') as f:
    json.dump({
        "nodes": nodes_list_dict,
        "links": links_list_dict
    }, f)


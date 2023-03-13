import React, { useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import {
  CssBaseline,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Link,
} from "@mui/material";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { Comment } from "react-loader-spinner";
import {
  setArticles,
  setIsLoading,
  setCurrentPage,
} from "../redux/features/appSlice";

const NewsFeed = () => {
  const { classes } = useStyles();
  //   REDUX
  const articles = useSelector((state) => state.newsArticles.articles);
  const currentPage = useSelector((state) => state.newsArticles.currentPage);
  const isLoading = useSelector((state) => state.newsArticles.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );

        const topStoryIds = response.data;

        const result = await Promise.all(
          topStoryIds.map(async (id) => {
            const storyById = await axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            );

            return storyById.data;
          })
        );
        dispatch(setArticles(result));
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    fetchData();
  }, [dispatch]);

  //   console.log(articles);

  const handlePageChange = (e) => {
    // console.log(e);
    dispatch(setCurrentPage(e.selected));
  };

  const itemsPerPage = 9;
  const offset = currentPage * itemsPerPage;
  const currentPageArticles = articles.slice(offset, offset + itemsPerPage);

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
        <div className={classes.headerDiv}>
          <Typography className={classes.header}>News Feed</Typography>
        </div>
        {isLoading ? (
          <div className={classes.welcomeDiv}>
            <Comment
              visible={true}
              height="180"
              width="180"
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
              color="#fff"
              backgroundColor="#1a67b9"
            />
            <Typography className={classes.blinking}>
              WELCOME TO TECH NEWS...
            </Typography>
          </div>
        ) : (
          <Container maxWidth="md">
            <Grid container spacing={4}>
              {currentPageArticles.map((article, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent>
                      <Typography style={{ fontWeight: "bold" }}>
                        {article.title}
                      </Typography>
                      <div className={classes.by}>
                        <Typography>
                          <span style={{ color: "red", fontWeight: "bold" }}>
                            By:
                          </span>{" "}
                          {article.by}
                        </Typography>
                      </div>

                      <CardActions className={classes.link}>
                        <Link href={article.url} underline="none">
                          <Button size="small">Read More</Button>
                        </Link>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
        <ReactPaginate
          nextLabel="next >"
          previousLabel="< prev"
          breakLabel="..."
          forcePage={currentPage}
          pageCount={Math.ceil(articles.length / itemsPerPage)}
          renderOnZeroPageCount={null}
          onPageChange={handlePageChange}
          containerClassName={classes.pagination}
          activeClassName={classes.active}
          pageLinkClassName={classes.pageLink}
          previousClassName={classes.prev}
          nextClassName={classes.next}
        />
      </div>
    </>
  );
};

export default NewsFeed;
